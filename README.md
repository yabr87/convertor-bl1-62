https://hackmd.io/@YGYcYPwrSpam-opsOJHMAw/rJ_UTnAVt

Frontend (React) task Task description Imagine you are working as a software
developer at PrivatBank. Your task is to create a SPA to make it comfortable for
users to manage exchanges rates.

Your application should consist of 2 pages:

Page with a converter from one currency to another. This page should have a text
box where you can enter text as 15 USD in UAH and get the result.

Page with current exchange rates. On this page the user should see “fresh”
exchange rates against the base currency - for example, if the base currency is
the ruble, the user se es that 1 USD = 26.80 UAH and 1 EUR = 31.20 UAH.

Create navigation bar (anywhere in the app, where on YOUR opinion it will be
better) for switching between pages.

First (and only the FIRST) opening of the application will offer user to chose
an exchange rate OR, what is better, will automatically define an exchange rate
by user current location (don’t consider the option when user uses incognito
tab).

User should be able to change his current exchange rate. Add this option there,
where on YOUR opinion it will be better.

Requirements React Use lazy loading (IMPORTANT!) for making performance of
application faster. Your pages should load separately depending on which page is
cuurently opened by user. Redux or MobX Use redux or mobx for state managemnt,
such as curently chosen rate. Webpack Use webpack for compiling js (or ts)
modules. Use code splitting (IMPORTANT!) and lazy loading (IMPORTANT!) for
making performance of the application faster.

Will a plus Using Typescript Version control best practices. Writing
documentation to your application (README.md etc.) https://readme.com

Examples of different APIs you can use for this task

- Exchanges Rates https://exchangeratesapi.io/documentation/

- API Fixer https://fixer.io/documentation

- API (similar to previous) Open exchange rates https://openexchangerates.org

- OpenCage Geocoding API https://opencagedata.com/api
