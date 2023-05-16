class Waiters {
    async waitForPageStability() {
        await browser.waitUntil(
            async () => {
              const stable = await browser.execute('return window.getAllAngularTestabilities()[0].isStable()');
              return stable === true;
            },
            {
              timeout: 5000,
              timeoutMsg: 'Angular is not stable',
            },
          );
    }

}

export default new Waiters();