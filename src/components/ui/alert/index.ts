import { cva, type VariantProps } from 'class-variance-authority'

export { default as Alert } from './Alert.vue'
export { default as AlertDescription } from './AlertDescription.vue'
export { default as AlertTitle } from './AlertTitle.vue'

export const alertVariants = cva(
  'relative w-full rounded-xl border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground',
  {
    variants: {
      variant: {
        default: 'bg-mutedtext-foreground',
        destructive:
          'border-destructive/50 text-destructive font-bold rounded-xl  dark:border-destructive [&>svg]:text-destructive',
        success:
          'border-green-700/50 text-green-700 rounded-xl  dark:border-green-700 [&>svg]:text-green-700',
        warning:
          'border-yellow-700/50 text-yellow-700 rounded-xl  dark:border-yellow-700 [&>svg]:text-yellow-700',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export type AlertVariants = VariantProps<typeof alertVariants>
