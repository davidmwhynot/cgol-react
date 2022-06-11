export class Subscription<T> {
	constructor(private cb: (data: T) => void) {}

	public update(data: T): void {
		this.cb(data);
	}
}
