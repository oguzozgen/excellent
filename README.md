# Excellent.js

<img align="left" width="220" height="220" src="./.github/images/burns.gif">

## DOM-fiddling library :)

[![Build Status](https://travis-ci.org/vitaly-t/excellent.svg?branch=master)](https://travis-ci.org/vitaly-t/excellent)
[![Join Chat](https://badges.gitter.im/vitaly-t/excellent.svg)](https://gitter.im/vitaly-t/excellent)

If you like working with DOM directly, this tiny (2Kb compressed) library gives you the tools for organizing
all your JavaScript code in such a way that's highly reusable, easy to maintain and distribute.

See [Wiki Pages] for all the details.

---

You get the essential element-to-controller bindings:

```html
<div e-bind="awesome, twinkling, message"></div>
```

That gives your code isolation and high reusability:

```js
app.addController('message', function() {
    this.node.innerHTML = 'This is awesome! :)'; // this.node = your DOM element
});

app.addController('awesome', function() {
    this.node.className = 'green-box'; // css class for a green box
});

app.addController('twinkling', function() {
  var s = this.node.style, a = -0.01;
  setInterval(function() {
    var b = +s.opacity;
    a = (b < -0.1 || b > 1) ? -a : a;
    s.opacity = +s.opacity + a;
  }, 10);
});
```
<a href="http://plnkr.co/edit/60xPj9MiCIbZlfe0Xp2I?p=preview"><img align="left" width="370" height="55" src="./.github/images/message.gif" alt="awesome"></a>
&#x2190; Click it to see the app ;)
<br/>
<br/>
Then it gets out of your way, lets you work with DOM directly, while [Modules], [Services] and [Inheritance] enable you to build large-scale apps and high-performance reusable component libraries with this simple framework.

### Quick Links: &nbsp;[Examples]&nbsp; |&nbsp; [WiKi]&nbsp; |&nbsp; [API]

[API]:https://vitaly-t.github.io/excellent/
[Examples]:https://github.com/vitaly-t/excellent/wiki/Examples
[Wiki Pages]:https://github.com/vitaly-t/excellent/wiki
[WiKi]:https://github.com/vitaly-t/excellent/wiki
[Modules]:https://github.com/vitaly-t/excellent/wiki/Modules
[Services]:https://github.com/vitaly-t/excellent/wiki/Services
[Inheritance]:https://github.com/vitaly-t/excellent/wiki/Inheritance
