# What is this?

Get perfect shadows every time for the non-designer.

# Installation

`npm install khairwal-utilities --save`

Then...

```
import { shadowizard } from 'khairwal-utilities';

shadowizard({
    shadow_type: 'soft',
    padding: false
});
```
## Options

Shadowizard support 2 options, both of which are optional:

* *shadow_type* - _hard/_soft (Defaults to _soft)
* *padding* - _boolean_ (Defaults to false)

# What is this?

Get debouncing and throttling techniques for Javascript developers.

# Installation

`npm install khairwal-utilities --save`

Then...

```
import { debounce } from 'khairwal-utilities';

var db = debounce(func, wait);
```

## Parameters

debouncs support 2 parameters, both of which are required:

* *func* - function to debounce
* *wait* - time to debounce (in milliseconds)

## Example

```
import { debounce } from 'khairwal-utilities';

var debounce_fun = debounce(function () {
  console.log('Function debounced after 1000ms!');
  }, 1000);
  
debounce_fun();
```



