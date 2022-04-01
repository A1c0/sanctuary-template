import {env as flutureEnv} from 'fluture-sanctuary-types';
import sanctuary from 'sanctuary';
import _$ from 'sanctuary-def';
import * as sanctuaryLourdes from 'sanctuary-lourdes';

export const CHECK_TYPES_SANCTUARY =
  process.env?.CHECK_TYPES_SANCTUARY === 'true';

const _S = sanctuary.create ({
  checkTypes: CHECK_TYPES_SANCTUARY,
  env: sanctuary.env.concat (flutureEnv),
});

export const S = {..._S, unchecked: Object.assign ({}, _S.unchecked)};

export const Sl = sanctuaryLourdes.create ({checkTypes: CHECK_TYPES_SANCTUARY});

export const $ = Object.assign (_$);
