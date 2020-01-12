import Cookie from 'js-cookie'

const TokenKey = 'User-Token'
const NameKey = 'User-Name'
const AvatarKey = 'User-Avatar'

export function setUser(token, name, avatar) {
  Cookie.set(NameKey, name)
  Cookie.set(AvatarKey, avatar)
  Cookie.set(TokenKey, token)
}

export function getUser() {
  return {
    token: Cookie.get(TokenKey),
    name: Cookie.get(NameKey),
    avatar: Cookie.get(AvatarKey)
  }
}

export function removeUser() {
  Cookie.remove(TokenKey)
  Cookie.remove(NameKey)
  Cookie.remove(AvatarKey)
}
