import { Model } from '@nozbe/watermelondb'
import { field, text } from '@nozbe/watermelondb/decorators'

export default class Farm extends Model {
  static table = 'farms'

  @text('name') name
  @field('investment') investment
  @text('location') location
}