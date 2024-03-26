export default {
  '*': () => ['pnpm format:write', 'pnpm nx run-many --target=lint'],
};
