export const fallbackLng: string = 'en'
export const languages: string[] = [fallbackLng, 'jp']

export const defaultNS = 'translation'

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  }
}
