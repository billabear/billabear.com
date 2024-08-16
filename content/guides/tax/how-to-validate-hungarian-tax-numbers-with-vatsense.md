---
title: "How to validate Hungarian tax numbers with VAT Sense"
slug: "how-to-validate-hungarian-tax-numbers-with-vatsense"
section: tax
author:
  display_name: Iain
meta:
  keywords: subscription management software, SaaS Business, Software as a Service, BillaBear
  description: How to validate Hungarian VAT Numbers
  title: "A walkthrough of how to use the VAT Sense API to validate Hungarian VAT numbers"
---
For this guide you will need to have a VAT Sense API Key, you can get a free one at [vatsense.com](https://vatsense.com/signup?referral=BILLABEAR).

VAT Sense is an API that allows you to fetch tax rates and validate tax numbers. Today we'll look at the tax validation functionality to validate Belgian VAT Numbers.

## VAT Number

One of the important things to note is that the VAT number **MUST** be prefixed with the 2-letter country code. So for Hungarian that would be with a HU prefix. 

## Consultation Number

In some cases you may need to confirm to your tax authority that you did indeed check the VAT number was valid. For this purpose, there is a consultation number.

To get this consultation number you need to provide your tax id.

## Request

VAT Sense uses an HTTP Basic authentication process with a default username of `user` by your API key as the password.

The HTTP method is `GET`.

The base URL is `https://api.vatsense.com/1.0/validate`.

The parameters for the request are:

* vat_number - A required field. This is the VAT Number you want validated.
* requester_vat_number - An optional field. This is your VAT Number. You provide this if you want a Consultation Number.

## Response

The VAT Sense API will respond with JSON

```json
{
  "success": true,
  "code": 200,
  "data": {
    "valid": true,
    "company": {
      "vat_number": "288305674",
      "country_code": "GB",
      "company_name": "WEIO LTD",
      "company_address": "142 CROMWELL ROAD\nLONDON\nGREATER LONDON\n\n\nSW7 4EF"
    },
    "consultation_number": "WAPIAAAAXT9mrLue"
  }
}
```

The `consultation_number` field is only present if you've provided the `requester_vat_number`.

## Examples

In the below examples, you need to replace `{{apiKey}}` with the API key you get from [vatsense.com](https://vatsense.com/signup?referral=BILLABEAR).

### CURL

```sh
curl --request GET \
--url 'https://api.vatsense.com/1.0/validate?vat_number=GB288305674' \
--user 'user:{{apiKey}}'
```

### PHP Curl

```php 
<?php
// configure request
$endpoint = 'https://api.vatsense.com/1.0/validate?vat_number=GB288305674';
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

### PHP Guzzle/PSR-7

Choose your HTTP Library of choice.

```php
 $client = new Client([
            'auth' => ['user', '{{apiKey}}'],
        ]);

 $url = sprintf('https://api.vatsense.com/1.0/validate?vat_number=%s', $taxId);
 $request = new Request('GET', $url);
 $response = $client->send($request);
 $data = json_decode($response->getBody()->getContents(), true);
```

### Python

```python
import requests

# configure request
endpoint = "https://api.vatsense.com/1.0/validate?vat_number=GB288305674";
apikey = "{{apiKey}}"

# init request
response = requests.get(endpoint, auth=('user', apikey))

# print response
print(response.text)
```

### JavaScript

```js 
const axios = require('axios');
       
// configure request
const endpoint = 'https://api.vatsense.com/1.0/validate?vat_number=GB288305674';
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
