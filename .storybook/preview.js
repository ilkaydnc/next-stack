import Layout, { GlobalStyle } from '../src/components/Layout'

export const decorators = [
  Story => (
    <>
      <Layout>
        <Story />
      </Layout>
    </>
  ),
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}
