export const hashtags = (text) => {
  return  text.split (''); filter(word => word.substring(0,1) ==="#");

}

export const hashtags = (text) => {
  return text.split(' ').filter(word => word.startsWith('#'))
}
