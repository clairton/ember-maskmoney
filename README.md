# ember-maskmoney

[jquery-maskmoney](https://github.com/plentz/jquery-maskmoney) wrapper for ember-cli

## Installation

```bash
cd your-project-directory
ember install ember-maskmoney
```

## Usage

You can use all options from [docs](http://plentz.github.io/jquery-maskmoney/)

```handlebars
{{input-money
  placeholder=placeholder
  number=model.amount
  class=inputClass
}}
```

#### **Important**, use `number` attribute for bindings

It extends `Ember.TextField`, so you can also use all of its options.


