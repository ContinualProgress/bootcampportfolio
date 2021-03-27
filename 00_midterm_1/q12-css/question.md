### Question:

Please use your own simple words to describe what are cascading rules in CSS. Please keep it under 150 words. Full credit given to simple explanation in own words and not a copy and paste from the documentation ;-)

### Answer:


As per w3...

In CSS, more than one style sheet can simultaneously influence a the presentation of a document and rules from these style sheets may overlap in scope (e.g., two rules that apply to the same element specify a font size). CSS resolves these conflicts by assigning a weight to each style rule and when several rules apply, choosing the one with the greatest weight. This is known as the cascade .

By default, rules in a user's personal style sheets have less weight than rules in the author's documents. Thus, if there are conflicts between the style sheets of an incoming document and the reader's personal sheets, the author's rules will be used. Both reader and author rules override the UA's default style sheet.

Imported style sheets also cascade and their weight depends on their import order. Rules specified in a given style sheet override rules imported from other style sheets. Imported style sheets can themselves import and override other style sheets, recursively, and the same precedence rules apply.


