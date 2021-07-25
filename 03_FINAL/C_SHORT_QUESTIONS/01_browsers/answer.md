Neither case results in an HTTP GET request.  I supposed this is because the image in either case is stored locally on the device.

To further make the point, I tested a third case, where I referenced the *URL* of the image in question, for the `src` field of the image tag.  This resulted in a GET request.
