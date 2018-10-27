export default function ({ route, redirect, store }) {
  if (route.name === 'index') {
    return redirect('/chat')
  }
  if (route.name === 'Chat') {
    store.commit('chat/UNVIEWED_MESSAGE', false)
  }
}