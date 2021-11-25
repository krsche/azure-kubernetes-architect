export default async (context) => {
  await context.store.dispatch('decisions/clientInit', context)
}
