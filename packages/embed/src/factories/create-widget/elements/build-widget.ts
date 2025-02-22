import { createHttpWarningBanner, setElementSize } from '../../../utils'

export const buildWidget = (iframe: HTMLIFrameElement, width?: number, height?: number): HTMLElement => {
  const widget = document.createElement('div')
  widget.className = 'tf-v1-widget'

  widget.append(iframe)
  const httpWarningBanner = createHttpWarningBanner()
  widget.append(httpWarningBanner)

  return setElementSize(widget, { width, height })
}
