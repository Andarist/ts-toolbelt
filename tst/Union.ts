/* tslint:disable:use-default-type-parameter interface-name */

import {Test, U} from '../src/index'

const {checks, check} = Test

// ///////////////////////////////////////////////////////////////////////////////////////
// UNION /////////////////////////////////////////////////////////////////////////////////

// ---------------------------------------------------------------------------------------
// DIFF

checks([
    check<U.Diff<1 | 2, 1 | 3>,     2 | 3,    Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// EXCLUDE

checks([
    check<U.Exclude<1 | 2 | 3, 3>, 1| 2,    Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// FILTER

// No test needed (same as U.Exclude)

// ---------------------------------------------------------------------------------------
// HAS

checks([
    check<U.Has<1 | 2 | 3, string>,     0,      Test.Pass>(),
    check<U.Has<1 | 2 | 3, 1>,          1,       Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// INTERSECT

checks([
    check<U.Intersect<1 | 2, 3 | 2 | 1>,    2 | 1,  Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// INTERSECTOF

checks([
    check<U.IntersectOf<1 | 2 | 3>,     1 & 2 & 3,  Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// LAST

checks([
    // check<U.Last<1 | 2 | 3>,    3,  Test.Pass>(), // order not guaranteed
    // check<U.Last<3 | 2 | 0>,    0,  Test.Pass>(), // order not guaranteed
])

// ---------------------------------------------------------------------------------------
// NONNULLABLE

checks([
    check<U.NonNullable<1 | 2 | undefined>,     1 | 2,      Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// NULLABLE

checks([
    check<U.Nullable<1 | 2>,    1 | 2 | undefined,      Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// POP

checks([
    // check<U.Pop<1 | 2 | 3>,     1 | 2,      Test.Pass>(), // order not guaranteed
    check<U.Pop<1>,             never,      Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// REPLACE

checks([
    check<U.Replace<1 | 2 | 3, 1 | 2, 'a'>,     'a' | 3,    Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// SELECT

checks([
    check<U.Select<1 | 2 | 'a', number>,    1 | 2,  Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// TUPLEOF

checks([
    // check<U.TupleOf<1 | 2 | 3>,     [1, 2, 3],    Test.Pass>(), // order not guaranteed
])
