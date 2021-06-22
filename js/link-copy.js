browser.menus.create( {
  id: 'a-copies-this-link',
  title: "&A - Copy Link [A]ddress",
  contexts: ['link'],
} )

browser.menus.onClicked.addListener( function ( info, tab ) {
 	navigator.clipboard.writeText( info.linkUrl );
} )
