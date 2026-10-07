/* Real product list goes here. While STORE_CATALOG is null the app shows its built-in sample products. */
window.STORE_CATALOG = null;

/* Message shown at the top of the app for every customer.
   - text: the message. id: change it to show a NEW message again to people who closed the old one.
   - link (optional): a page inside the app like '#/category/...' or a full web address.
   - until (optional): last day to show it, like '2026-11-30'.
   To turn it off, set it to null. */
window.STORE_ANNOUNCEMENT = null;
/* Example:
window.STORE_ANNOUNCEMENT = { id: '1', text: 'تخفیف ویژه آبان ماه شروع شد', until: '2026-11-30' };
*/
