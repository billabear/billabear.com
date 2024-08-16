---
title: "How to determine the tax price for Portugal with VAT Sense"
slug: "how-to-determine-the-tax-price-for-portugal-with-vatsense"
section: tax
author:
  display_name: Iain
meta:
  keywords: subscription management software, SaaS Business, Software as a Service, BillaBear, determine tax, tax price, Portugal
  description: How to determine the tax price for Portugal with VAT Sense
  title: "A walkthrough of how to use the VAT Sense API to determine a tax price for Portugal"
---
For this guide you will need to have a VAT Sense API Key, you can get a free one at [vatsense.com](https://vatsense.com/signup?referral=BILLABEAR).

VAT Sense is an API that allows you to fetch tax rates, calculate tax prices, and validate tax numbers. Today we'll look at the tax price calculation functionality.

Here we'll show you how to determine the tax price for Portugal via the VAT Sense API. This will return the tax rate for Portugal as well as the total amount of the price if the price is exclusive of tax and how much of the price is tax if it's inclusive of tax all depending on the tax rate for Portugal.

## Tax Rates

Tax rates change in each country so if you want to calculate the amount of tax you need to collect you need to know which country and which kind of item you're calculating tax for.

For digital products such as eBooks, SaaS, etc. then you need to charge the tax rate of the country the customer resides in.

For example, if you are selling an ebook it may be a different rate than if you're selling a subscription to a SaaS. And if you sell an ebook to someone residing in Portugal it'll probably be a different rate than if you sold it to someone in a different country.

This means you will want to calculate the tax price every time you sell to a customer instead of calculating it once and reusing that calculation.

VAT Sense can manage this for you by providing you with an endpoint where you provide them the info to calculate the tax and it provides you all the information.

## Request

VAT Sense uses an HTTP Basic authentication process with a default username of `user` by your API key as the password.

The HTTP method is `GET`.

The Base URL for this request is `https://api.vatsense.com/1.0/rates/price`

The parameters for the request are:

* `country_code` - The country code you want to request a tax rate for.
* `ip_address` - The IP Address you want to use to request a tax rate for. **Must be provided if no country_code is provided and overrides country_code**
* `province_code` - If you want to request a tax rate for a region within a country. **If you provide this you must provide country_code**.
* `eu` - Whether the country is within the EU or not.
* `type` - The tax type that is to be applied. [You can find the tax types supported here.](https://vatsense.com/documentation#tax_rate_types)
* `price` - The price you wanted calculated. This must be in decimal to 2 decimal places.
* `tax_type` - If you want the price to be inclusive or exclusive. Values are `incl` and `excl`.

## Response

In the response there are several important bits of data being returned.

### Tax Rate / VAT Rate

In the data object there is a field called `tax_rate`. In this object there are:

* `rate` - The tax rate that is being applied
* `class` - The tax rate class.
* `description` - A readable description of the tax rate
* `types` - The tax types in a comma separated string

### Tax Price / VAT Price

In the data object there is a field called `vat_price`. In this object there are:

* `price` - The original price being sent
* `vat_rate` - The tax rate that is being applied.
* `tax_type` - If it's inclusive or not. `incl` for inclusive and `excl` if it's exclusive.
* `price_excl_vat` - The price excluding tax/VAT
* `price_incl_vat` - The price including tax/VAT
* `vat` - The amount of tax/VAT

Example for `https://api.vatsense.com/1.0/rates/price?country_code=FR&type=ebooks&price=20.00&tax_type=incl`

```json
{
  "success": true,
  "code": 200,
  "data": {
	"object": "rate",
	"country_code": "FR",
	"country_name": "France",
	"eu": true,
	"tax_rate": {
	  "object": "tax_rate",
	  "rate": 5.5,
	  "class": "reduced",
	  "description": "Admission to certain cultural events; admission to sports events; books (excluding those with pornographic or violent content); certain domestic care services; certain ebooks; certain non-alcoholic beverages; certain renovation and repair of private dwellings; certain social housing; cut flowers and plants for food production; sanitary protection for women; school canteens; water supplies, medical equipment for disabled persons; foodstuffs",
	  "types": "medical, foodstuffs, ebooks, books, water"
	},
	"vat_price": {
	  "object": "vat_price",
	  "price": 20,
	  "vat_rate": 5.5,
	  "tax_type": "incl",
	  "price_excl_vat": 18.96,
	  "price_incl_vat": 20,
	  "vat": 1.04
	}
  }
}
```

### Curl

```shell
curl --request GET \
--url 'https://api.vatsense.com/1.0/rates/price?country_code=FR&type=ebooks&price=20.00&tax_type=excl' \
--user 'user:{{apiKey}}'
```

### PHP - Curl

```php
<?php
// configure request
$endpoint = 'https://api.vatsense.com/1.0/rates/price?country_code=FR&type=ebooks&price=20.00&tax_type=excl';
$apikey = '{{apiKey}}';

// init curl
$ch = curl_init();

// set curl options
curl_setopt($ch, CURLOPT_URL, $endpoint);
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
curl_setopt($ch, CURLOPT_USERPWD, 'user:'.$apikey);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_TIMEOUT, 10);

$response = curl_exec($ch);

curl_close($ch);

// print response as json
header('Content-Type: application/json');

// print response
print_r($response);
```

### PHP - Guzzle/PSR-7

```php
 $client = new Client([
            'auth' => ['user', '{{apiKey}}'],
        ]);

 $url = 'https://api.vatsense.com/1.0/rates/price?country_code=FR&type=ebooks&price=20.00&tax_type=excl';
 $request = new Request('GET', $url);
 $response = $client->send($request);
 $data = json_decode($response->getBody()->getContents(), true);
```

### Python

```python
import requests

# configure request
endpoint = "https://api.vatsense.com/1.0/rates/price?country_code=FR&type=ebooks&price=20.00&tax_type=excl";
apikey = "{{apiKey}}"

# init request
response = requests.get(endpoint, auth=('user', apikey))

# print response
print(response.text)
```

### Javascript/Node

```js
const axios = require('axios');
		
// configure request
const endpoint = 'https://api.vatsense.com/1.0/rates/price?country_code=FR&type=ebooks&price=20.00&tax_type=excl';
const apikey = '{{apiKey}}';

// init axios request
axios({
	method:'get',
	url: endpoint,
	auth: {
		username: 'user',
		password: apikey
	}
}).then(function (response) {
	// print response
	console.log(JSON.stringify(response));
}).catch(function (error) {
	// print error
	console.log(error);
});
```

## Other option

The other option is that you let BillaBear handle your billing. And then you can use our integration to manage this and many other things.
