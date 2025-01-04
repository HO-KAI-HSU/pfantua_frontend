export default {
    Menu: [],
    MenuMap: {},

    load(api) {
        return new Promise(async (resolve, reject) => {
            var menu = await api.getMenu();
            var root = { Children: [], MenuID: null };
            this.createMenu(menu, root);
            this.Menu = root.Children;
            resolve(this);
        });
    },


    createMenu(menu, parent) {
        menu.forEach((m) => {
            this.MenuMap[m.MenuID] = m;
            if (m.ParentMenuID == parent.MenuID) {
                if (!parent.Children) {
                    parent.Children = [];
                }
                parent.Children.push(m);
                this.createMenu(menu, m);
            }
        });
    },

    getParents(menu, array) {
        if (!array) {
            array = [];
        }
        if (menu) {
            array.push(menu);
            if (menu.ParentMenuID) {
                menu = this.MenuMap[menu.ParentMenuID];
                this.getParents(menu, array);
            }
        }
        return array;
    }
}