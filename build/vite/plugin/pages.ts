import Pages from 'vite-plugin-pages'

export function configPagesPlugin() {
  return Pages({
    pagesDir: [{ dir: 'src/views', baseRoute: '' }],
    extensions: ['vue', 'md'],
  })
}