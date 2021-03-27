
// ˉˉˉˉˉˉˉˉˉˉˉˉˉˉˉˉˉˉˉˉˉˉˉˉˉ
//  Навигация
// ˍˍˍˍˍˍˍˍˍˍˍˍˍˍˍˍˍˍˍˍˍˍˍˍˍ
export type NavigationLink = {
  id: number, name: string, icon: string, href: string
}
export const navigationLinks:NavigationLink[] = [
  {id: 1, name: 'Новости', icon: 'news', href: '/news'},
  {id: 2, name: 'События', icon: 'geo-list', href: '/events'},
  {id: 3, name: 'Обучения', icon: 'bachelor2', href: '/training'},
  {id: 4, name: 'Работа', icon: 'briefcase', href: '/jobs'},
]

// ˉˉˉˉˉˉˉˉˉˉˉˉˉˉˉˉˉˉˉˉˉˉˉˉˉ
//  Соц. Сети
// ˍˍˍˍˍˍˍˍˍˍˍˍˍˍˍˍˍˍˍˍˍˍˍˍˍ
export type SocialLink = {
  id: number, name: string, icon: string, href: string
}
export const socialLinks:NavigationLink[] = [
  {id: 1, name: 'dnr_dev', icon: 'telegram', href: 'https://t.me/dnr_dev'},
  {id: 2, name: 'dnr.dev', icon: 'vk', href: 'https://vk.com'}
]
