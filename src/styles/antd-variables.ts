/**
 * less global variable
 */
export function generateModifyVars(dark = false) {
  const primary = '#8fc31f'
  // const clickColor = '#5683e2'
  return {
    '@ant-prefix': 'antv',
    // ...modifyVars,
    // Used for global import to avoid the need to import each style file separately
    // reference:  Avoid repeated references
    '@primary-color': primary,
    '@btn-primary-bg': primary,
    'info-color': primary,
    '@table-border-color': '#dcdcdc',
    '@processing-color': primary,
    '@btn-primary-color': '#fff',
    'success-color': '#55D187', //  Success color
    'error-color': '#ED6F6F', //  False color
    'warning-color': '#EFBD47', //   Warning color
    'font-size-base': '14px', //  Main font size
    'border-radius-base': '2px', //  Component/float fillet
    'link-color': primary, //   Link color
    'app-content-background': '#fafafa', //   Link color
    'layout-header-height': '56px',
    'layout-header-padding': '0px',
    'layout-header-background': 'linear-gradient(90.13deg, #435062 0%, #586472 90.54%)'
  }
}
