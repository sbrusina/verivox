export default class HomePage {
    get menuItem() {
        return (itemName) => `a[href = "/${itemName}/"]`;
      }

    get subMenuItem() {
        return (itemName) => `a[href = "/${itemName}/"]`;
      }

      async openSubMenuPage(menuItemName, subMenuItemName) {
        const menuItemNameElement = await $(this.menuItem(menuItemName));
        await menuItemNameElement.waitForClickable();
        await menuItemNameElement.moveTo();
        const subMenuItemNameElement = await $(this.subMenuItem(subMenuItemName));
        await subMenuItemNameElement.waitForClickable();
        await subMenuItemNameElement.click();
      }
}
