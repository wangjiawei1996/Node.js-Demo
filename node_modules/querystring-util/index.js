
function SearchMaker(strSearch) {
    this.search = strSearch || '';
};

SearchMaker.prototype = {
    toString: function() {
        return this.search;
    },
    get: function(key) {
        var me = this;

        return (me.search.match(me.makeReg(encodeURIComponent(key))) || ['', '', null])[2] || '';
    },
    // 添加或修改query
    set: function(key, value, del) {
        
        // 如果 value 是 undefined 不记录的 url 里
        if (value === undefined) {
            return this;
        }

        var k = encodeURIComponent(key),
        v = value ? encodeURIComponent(value) : '',
        me = this,
        search = me.search,
        reg = me.makeReg(k);

        if (reg.test(search)) {
            if (del) {
                me.search = search.replace(reg, '$1').replace(/&($|#.*)/, '$1');
            } else {
                me.search = search.replace(reg, '$1' + k + '=' + v + '$3');
            }
        } else {
            // 未匹配到并且不是删除key
            if (!del) {
                me.add(k, v);
            }
        }
    },
    // 添加query，被set调用
    add: function(key, value) {
        var me = this;

        if (me.search) {
            me.search = me.search.replace(/([^#]+)(#.*)?/, '$1&' + key + '=' + value + '$2');
        } else {
            me.search = '?' + key + '=' + value;
        }

    },
    makeReg: function(key) {
        return new RegExp('(\\?|&)' + key + '(?:&|$|=(.*?)(&|#|$))');
    }
};

module.exports = function(strSearch) {
    var objSearch = new SearchMaker(strSearch || window.location.search);

    var objExport = {
        get: function(key) {
            return objSearch.get(key).toString();
        },
        set: function(key, value) {
            objSearch.set(key, value);

            return objExport;
        },
        del: function(key) {
            objSearch.set(key, '', 1);

            return objExport;
        },
        toString: function() {
            return objSearch.toString();
        }
    };

    return objExport;
};