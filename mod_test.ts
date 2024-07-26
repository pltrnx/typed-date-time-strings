import { assertEquals } from '@std/assert';

import { sayHello } from './mod.ts';

Deno.test('sayHello', () => {
  assertEquals(sayHello(), 'Hello, World!');
});
