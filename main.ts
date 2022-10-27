let buffer = pins.createBuffer(2)
buffer[0] = 64
buffer[1] = 10
basic.forever(function () {
	serial.writeBuffer(buffer)
})
