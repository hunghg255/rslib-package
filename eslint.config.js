import { basic, typescript } from '@hunghg255/eslint-config'

export default [...basic(), ...typescript(), {
  ignores: ['dist/**/*.ts', 'dist/**'],
}]
