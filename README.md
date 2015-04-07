# Ember-cli-maskmoney

[jquery-maskmoney](https://github.com/plentz/jquery-maskmoney) wrapper for ember-cli

## Installation

```bash
cd your-project-directory
ember install:addon ember-maskmoney
```

## Usage

You can use all options from [docs](http://plentz.github.io/jquery-maskmoney/)

```handlebars
{{mask-money 
  placeholder=placeholder 
  number=model.amount 
  class=inputClass 
  }}
```

#### **Important**, use `number` attribute for bindings

It extentends `Ember.TextField`, so you can also use all of its options.


