import Stripe from 'stripe'
import {version} from '../../package.json'

export const stripe = new Stripe(
  typeof process.env.STRIPE_API_KEY === "string" ? process.env.STRIPE_API_KEY : '',
  {
    apiVersion: '2023-10-16',
    appInfo: {
      name: 'ignews',
      version
    }
  }
)