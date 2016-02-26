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
{{input-money placeholder=placeholder number=model.amount class=inputClass}}
```

If you want masked values without decimal, add `allowDecimal=false` attribute.
```handlebars
{{input-money number=amount thousands='.' allowDecimal=false decimal='' precision=0 suffix='' preffix='$'}}
```

#### **Important**, use `number` attribute for bindings.

It extends `Ember.TextField`, so you can also use all of its options.


