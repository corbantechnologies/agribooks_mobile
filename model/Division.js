import { Model } from '@nozbe/watermelondb'
import { field, text } from '@nozbe/watermelondb/decorators'

export default class Division extends Model {
  static table = 'divisions'

  @text('name') name
  @text('product') product
  @field('investment') investment
  @text('activity') activity
}
