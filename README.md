# Voice Mixer
SPLOTish tool for creating mixes of different voices reading the same original text, in the style of the [Mailchimp Ad for Serial](https://qz.com/298094/how-mailchimps-irresistible-serial-ad-became-the-years-biggest-marketing-win/).

-----
*If this kind of stuff has any value to you, please consider supporting me so I can do more!*

[![Support me on Patreon](http://cogdog.github.io/images/badge-patreon.png)](https://patreon.com/cogdog) [![Support me on via PayPal](http://cogdog.github.io/images/badge-paypal.png)](https://paypal.me/cogdog)

----- 

## What?

I made [a first version specific for my own podcast series](https://cogdog.github.io/mixvoices/) and it has been working great. But I wanted to have a version better suited for someone else to be able to do the same thing.

Here it is, and as a demo, I used the [OS X voice generation "say" tool](https://infoheap.com/convert-text-to-speech-on-mac-using-utility-say/) to have seven computer voices read the lines of Emily Dickinson's [To Make A Prairie It Takes A Clover And One Bee](http://www.public-domain-poetry.com/emily-elizabeth-dickinson/to-make-a-prairie-it-takes-a-clover-and-one-bee-13879).

Give it a spin at https://cogdog.github.io/voicemixer/


![](images/voicemixer-demo.jpg "Remix Emily Dickinson")


The site lets you generate random mixes. If there is one worth saving, it offers a downloadble configuration file which can be run command line (I hear the room emptying) to stitch them together into a single mp3.

*Yes, I tried some client side code to make the mixes but failed.*

That is silly yes, but until I get better documentation, maybe it's enough to get going?

## The Undocs

This hinges on having directories for each line stored in the `/audio` directory as `segment-1`, `segment-2`, `segment-3`, ... an files inside like `alan-1.mp3` in the first one and `alan-2.mp3` and `felix-2.mp3` in the second. There was a reason for this! 

All of the configuration is done in  `/js/mixvoices.js` it's not the most elegant. Maybe one day it will be a JSON data file and some fancy tool to generate it.

Swap in your own image for `background.jpg` to customize and edit `index.html` to write your own intro text.


## History
* **Feb 5, 2022** first commit just to hang a demo.

