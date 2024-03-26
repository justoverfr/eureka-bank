export default {
  '*': () => ['pnpm format:write', 'pnpm lint:front', 'pnpm lint:back'],
};
