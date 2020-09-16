import {Depth} from '../Object/_Internal'
import {RequiredPart} from '../Object/Required'
import {List} from './List'
import {Cast} from '../Any/Cast'

/**
Make `L` required (deeply or not)
@param L to make required
@param depth (?=`'flat'`) to do it deeply
@returns [[List]]
@example
```ts
```
*/
export type Required<L extends List, depth extends Depth = 'flat'> =
    Cast<RequiredPart<L, depth>, List>
