# Syntax validations

You can provide your own syntax validations that will be ran against every command. This function should throw an error if the syntax is incorrect.

::callout{type="primary" icon}
Callback functions will be checked by NYXBCommands automatically. There is no need to actually implement this functionality yourself.
::

::code-group
  ```ts [typescript]
  import { Command } from '@nyxb/commands'
  
  export default (command: Command) => {
    const { commandObject, commandName } = command
  
    if (!commandObject.callback) {
      throw new Error(
      `Command "${commandName}" does not have a callback function.`
      )
    }
}
  ```
  ```js [javascript]
  module.exports = (command) => {
    const { commandObject, commandName } = command
  
    if (!commandObject.callback) {
      throw new Error(
      `Command "${commandName}" does not have a callback function.`
      )
    }
}
  ```
::
