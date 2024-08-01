---
vendor: lago
feature: tax
video: https://www.loom.com/share/1e4957445f0c4447b720f853a79fd45d?sid=ab22b10e-277e-4639-b88e-ecfb6017304b
---
Lago provides some support for tax calculation however it's very limited. It does not provide any tax management except for a separate upsell which will handle tax management for the EU.

You can set the tax on the following levels product, customer, and subscription level. However, this is made slightly more complicated than it should be as instead of entering a tax rate on those, you need to first create a tax object. This tax object can then be used.

You are able to set multiple tax rates on a product. It wasn't made clear that all tax rates will be applied all of the time. If you were wanting to change the tax that is being used, based on the legal requirements you would have to manage that logic yourself.

Fundamentally, for me Lago only solves the most basic of problems when it comes to tax and that is the tax calculation. Their tax management upsell only handles the EU which is also one the most basic of problems to solve. There is no way to say if a product or upsell is a physical product and qualifies for reverse charge or not, so it's possible they don't even support EU tax laws fully.

Problems

* You still need to manage which tax rate you want/need to use
* Tax rates for places such as Quebec are unable to be added to the system except via API. It has it to 2 decimal places which Quebec is 9.975 which is to three decimal places. If 3 decmial places are used it only shows 2 decmial places in the UI. I'm not sure if the tax calculation is done on 2 decmial places.
* If you apply a tax rate to a customer you need to create a tax object instead of just entering a figure.
* Doesn't provide any information on tax that has been collected
