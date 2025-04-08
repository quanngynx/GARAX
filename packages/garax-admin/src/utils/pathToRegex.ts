import {
    match,
} from "path-to-regexp";

/**
 * @https://github.com/pillarjs/path-to-regexp
 */

/**
 * @return { path: '/test/route', params: { foo: 'test', bar: 'route' } }
 */
const fn = match("/:foo/:bar");

fn("/test/route");

/**
 * @return { path: '/bar/baz', params: { splat: [ 'bar', 'baz' ] } }
 */
const fn_2 = match("/*splat");

fn_2("/bar/baz");


const fn_3 = match("/users{/:id}/delete");

/**
 * @return { path: '/users/delete', params: {} }
 */
fn_3("/users/delete");

/**
 * @return { path: '/users/123/delete', params: { id: '123' } }
 */
fn_3("/users/123/delete");