# CleanCode
- [Clean Code](https://app.pluralsight.com/library/courses/writing-clean-code-humans/table-of-contents)
- [Solid Code](https://www.pluralsight.com/courses/principles-oo-design)
- [Automated Testing](https://app.pluralsight.com/library/courses/automated-testing-fraidy-cats/table-of-contents)
- [Refactoring](https://www.pluralsight.com/courses/refactoring-fundamentals)
- [Domain Driven Design(DDD)](https://www.pluralsight.com/courses/patterns-library)
- [Test Driven Development](https://www.pluralsight.com/courses/outside-in-tdd)
- [Design Patterns](https://app.pluralsight.com/library/courses/patterns-library/)

## Books
- [Code Complete by Steve McConnell](https://www.stevemcconnell.com)
- [Clean Code by Rober S. Martin](https://www.objectmentor.com)
- [The Pragmatic Programmer by Andrew Hunt, David Thomas](https://www.pragprog.com)

## Principles

### Right tool for the job.

#### Boundaries Matter
> HTML, JS, CSS should be written in their own respective file type.

#### Stay Native
- Cached
- Code Colored
- Syntax Checked
- Separation of concerns
- Reusable
- Avoid string parsing
- Can minify and obfuscate

##### Avoid using one language to write another language/format via strings. e.g Using strings in C#, Java, PHP, etc. to create
- Javascript
- XML
- HTML
- JSON
- CSS

#### Leverage Libraries
- One Language per file
- Every Tech is Potential Evil

### Maximize signal to noise ratio.

#### Signal
> Logic that folows the TED rule:
- **T**erse - should not excessively wordy.
- **E**xpressive - clear on what code is trying to do
- **D**o one thing - clear and one thing responsibility.

#### Noise
- High Cyclomatic Complexity
- Excessive Indentation
- Zombie Code
- Unnecessary Comments
- Poorly Named Structures
- Huge Classes
- Long Methods
- Repetition
- No Whitespace
- Overly Verbose

#### Why is signal to noise ration so important?
1. Our brain is the compiler.
> We can process 7 items
2. The mess builds quietly.
3. Copy and paste is often a design problem.

### Self-documenting.
> Understanding the original programmer's intent is the most difficult prooblem.

> Well written code is self-documenting.

1. CLEAR INTENT
2. LAYERS OF ABSTRACTIONS
3. FORMAT FOR RELIABILITY
4. FAVOR CODE OVER COMMENTS

## Naming
### Classes
| Dirty | Clean |
| :-------------: |:-------------:|
| WebSiteBO | User |
| Utility | Account |
| Common | QueryBuilder |
| MyFunctions | ProductRepository |

#### Guidelines
- Noun
- Be specific
- Single Responsibility
- Avoid Generic Suffixes

### The Method Name Should Say It All

| Say what | Clean |
|---|---|
| Get | GetRegisteredUsers |
| Process | IsValidSubmission |
|Pending | ImportDocument |
| Dolt | SendEmail |

### Naming Warning Sign
#### Watch out for
- And
- If
- Or

#### Watch for Side Effects
- CheckPassword shouldn't log users out.
- ValidateSubmission shouldn't save.
- GetUser shouldn't create their session.
- ChargeCreditCard shouldn't send emails.

### Avd Abbr

- It's not the 80's
- No Standard
- We talk about code

### Booleans
 . Booleans names should sound like true/false questions.

| *Dirty* | _Clean_ |
|-----|-----|
| open | isOpen |
| start | done |
| status | isActive |
| login | loggedIn |
| ```if (login) {}``` | ```if (loggedIn) {}``` |

### Be symmetrical
> When dealing with states that toggle, consistently use matching pairs.

| _Dirty_ | _Clean_ |
|:-----:|:----:|
| on/disable | on/off |
| quick/slow | fast/slow |
| lock/open | lock/unlock |
| slow/max | min/max |

## Conditionals
1. Clear intent
2. Use the right tool
3. Bite-size logic
4. Sometimes code isn't the answer

### Boolean Comparison
- Dirty
```c#
if (loggeIn == true) {}
```
- Clean

```c#
if (loggedIn) {}
```



### Boolean Assignment
- Dirty
```c#
bool goingToChipotleForLunch;
if ( cashInWallet > 6.00) { goingToChipotleForLunch = true; }
else { goingToChipotleForLunch = false }
```
- Clean

```c#
bool goingToChipotleForLunch = cashInWallet > 6.00;
```

> 1. Fewer Lines
> 2. No separate initialization
> 3. No repitition
> 4. Reads like speech

### Positive Conditionals
> Don't be Anti-negative
> In other words, use positive conditionals.
- Dirty
```c#
if (!isNotLoggedIn)
```
- Clean

```c#
if (loggedIn)
```

### Ternary Elegance

- Dirty
```c#
int registrationFee;

if ( isSpeaker) {
    registrationFee = 0;
} else {
    regitrationFee = 50;
}
```
- Clean

```c#
int registrationFee = isSpeaker ? 0 : 50;
```

### Stringly Typed
- Dirty
```c#
if (employeeType == "manager")
```
- Clean

```c#
if (employee.Type === EmployeeType.Manager)
```

### Magic Numbers

- Dirty
```c#
if (age > 21) {}

if (status === 2) {}
```
- Clean

```c#
const int legalDrinkingAge = 21;
if (age > legalDrinkingAge) { // body here}

if (status === Status.Active) {}
```

### Complex Conditionals
- Dirty
```c#
if (car.Year > 1980
    && (car.Make === 'Ford' || car.Make === 'Chevrolet')
    && car.Odometer < 100000
    && car.Vin.StartsWith('V2') || car.Vin.StartsWith('IA3'))
    {
        // do lof of things here
    }

if (employee.Age > 55
    && employee.YearsEMployed > 10
    && employee.isRetired === true) 
{
 // do things   
}

if ((fileExtension === 'mp4' ||
    fileExtension === 'mpg' ||
    fileExtension === 'avi)
    && (isAdmin || isActiveFile)) {}
```
- Clean

```c#
// Intermediate Variable
bool eligibleForPension = employee.Age > 55
    && employee.YearsEMployed > 10 && employee.isRetired === true;

// Encapsulate via function

if (ValidFileRequest(fileExtension, isActiveFile, isAdmin))

private bool ValidFileRequest ( string fileExtension, bool isActiveFile, bool isAdmin) {
    return (fileExtension === 'mp4' ||
        fileExtension === 'mpg' ||
        fileExtension === 'avi)
        && (isAdmin || isActiveFile);
}
```

### Polymorphism vs Enums
- Dirty
```c#
private void LoginUser(User user) 
{
    switch (user.Status)
    {
        case Status.Active:
            // active user's logic
            break;
        case Status.Inactive:
            // inactive user's logic
            break;
        case Status.Locked:
            // locked user's logic
            break;
    }
}
```
- Clean

```c#
private void LoginUser(User user)
{
    user.Login();
}

private abstract class User
{
    public string FirstName;
    public string LastName;
    public Status status;
    public int AccountBalance;

    public abstract void login();

}

private class ActiveUser : User
{
    public void Login() {
        // Active user logic here
    }
}

private class InactiveUser : User
{
    public void Login() {
        // Inactive user logic here
    }
}

private class LockedUser : User
{
    public void Login() {
        // Locked user logic here
    }
}

```

### Be Declarative
- Dirty
```c#
List<User> matchingUsers = new List<User>();

foreach (var user in users)
{
    if (user.AccountBalance <minimumAccountBalance
        && user.Status == Status.Active)
    {
        matchingUsers.Add(user);
    }

    return matchingUsers;
}
```
- Clean

```c#
return users
    .Where(u => u.AccountBalance < minimumAccountBalance)
    .Where(u => u.Status == Status.Active)

```

### Table Driven Methods
- Dirty
```c#
if (age < 20)
{
    return 345.60;
}
else if (age < 30)
{
    return 419.5;
}
else if (age < 40)
{
    return 478.36;
}
else if (age < 50)
{
    return 516.25;
}

```
- Clean

| InsuranceRateId | MaximumAge | Rate |
|:---:|:---:|:---:|
| 1 | 20 | 346.60 |
| 2 | 30 | 420.50 |
| 3 | 40 | 476.38 |
| 4 | 50 | 516.25 |
```c#
return Repository.GetInsuranceRate(age)
```

## Functions
### Method vs Function
- Both functions and methods are pieces of code, called by name.4
- Core difference: Methods are associated with an object.

### When to Create Function
- Duplication
- Indentation
- Unclear intent
- `>`1task

### Avoid Duplication
- Don't repeat yourself
- Code is liability
- Less is more

### Excessive Indentation Overview
> Arrow Method

> 3 `f`'s, brain limit

> Solution
1. Extract
2. Return Early
3. Fail Fast

### Extract Method
- Before
```c#
if
    if
        while
            do
            some
            complicated
            things
        end while
    end if
end if
```

- After
```c#
if
    if
        doComplicatedThing()
    end if
end if

doComplicatedThing()
{
    while
        do
        some
        complicated
        things
    end while
}

```

### Return Early
- Before
```c#
private bool ValidUsername(string username)
{
    bool isValid = false;
    const int MinUsernameLength = 6;
    if (userName.Length >= MinUsernameLength)
    {
        const int MaxUsernameLength = 25;
        if (userName.Length >= MaxUsernameLength)
        {
            bool isAlphaNumeric = username.All(Char.IsLetterOrDigit);
            if (isAlphaNumeric)
            {
                if (!ContainsCurseWords(username))
                {
                    isValid = IsUniqueUserName(username);
                }
            }

        }
    }

    return isValid;
}
```

- After
```c#
private bool ValidUsername(string username)
{
    const int MinUsernameLength = 6;
    if (userName.Length >= MinUsernameLength) return false;

    const int MaxUsernameLength = 25;
    if (userName.Length >= MaxUsernameLength) return false;

    bool isAlphaNumeric = username.All(Char.IsLetterOrDigit) return false;
    if (isAlphaNumeric) return false;

    if (!ContainsCurseWords(username)) return false;

    return IsUniqueUserName(username);
}

```

### Fail Fast
- Before
```c#
public void RegisterUser(string username, string password)
{
    if (!string.isNullOrWhiteSpace(username))
    {
        if (!string.isNullOrWhiteSpace(password))
        {
            // register user here
        }
        else
        {
            throw new ArgumentException("Username is required");
        }
    }
    else
    {
        throw new ArgumentException("Password is required");
    }
}

private void LoginUser(User user) 
{
    switch (user.Status)
    {
        case Status.Active:
            // active user's logic
            break;
        case Status.Inactive:
            // inactive user's logic
            break;
        case Status.Locked:
            // locked user's logic
            break;
    }
}
```

- After
```c#
public void RegisterUser(string username, string password)
{
    if (string.isNullOrWhiteSpace(username)) throw new ArgumentException("Username is required");
    if (string.isNullOrWhiteSpace(password)) throw new ArgumentException("Password is required");

    // register user here
}

private void LoginUser(User user) 
{
    switch (user.Status)
    {
        case Status.Active:
            // active user's logic
            break;
        case Status.Inactive:
            // inactive user's logic
            break;
        case Status.Locked:
            // locked user's logic
            break;
        default:
            throw new ApplicationException("Unknown user status: " + user.Status);
    }
}

```
### Convey Intent
- Before
```c#
// check for Vlid file extensions. Confirm admin or active
if ((fileExtension === 'mp4' ||
    fileExtension === 'mpg' ||
    fileExtension === 'avi)
    && (isAdmin || isActiveFile)) {}
```

- After
```c#
if (ValidFileRequest(fileExtension, active, admin))

private bool ValidFileRequest(string fileExtension, bool isActiveFile, bool isAdmin)
{
    var validFileExtension = new List<string> { "mp4", "mpg", "avi" };

    bool validFileType = validFileExtensions.Contains(fieExtension);
    bool userIsAllowedToVIewFile = isActiveFile || is Admin;

    return validFileType && userIsAllowedToViewFile;
}
```
### Do One Thing
1. Aids the reader
2. Promotes reuse
3. Eases naming and testing
4. Avoid Side Effects

### Mayfly Variables
1. Initialize Variables just-in-time
2. Do one thing
3. 

- Before
```c++
private void MayFly()
{
    bool a = false;
    int b = 0;
    string c = string.Empty;
    bool d = true;
    // ...

    a = SomethingIsTrue();

    if (a)
    {
        if (c.Length > b)
        {
            // ...

            d = c.Substring(0,3) == b.ToString();
        }
    }
}

```

- After
```c#
private void MayFly()
{
    bool a = false;
    // ...

    a = SomethingIsTrue();

    if (a)
    {
        int b = 0;
        string c = string.Empty;
        if (c.Length > b)
        {
            bool d = true;
            // ...

            d = c.Substring(0,3) == b.ToString();
        }
    }
}

```
### Parameters
1. Strive 0-2 parameters
2. Easer to understand
3. Easier to test
4. Helps assure function does one thing

- Before
```c#
public void SaveUser(User user, bool sendEmail, int emailFormat, bool printReport, bool sendBill)

```

- After
```c#
public void SaveUser(User user)
public void SendEmail(bool sendEmail, int emailFormat)
public void PrintReport(bool printReport)
public void SendBill(bool sendBill))

```

#### Watch for Flag Arguments
1. A sign the function is doing two things
    - Before
    ```c#
    private void SaveUser(User user, bool emailUser)
    {
        // save user
        if (emailUser)
        {
            // email user
        }
    }

    ```

    - After
    ```c#
    private void SaveUser(User user) {
        // save user
    }

    private void EmailUser(User user)
    {
        // email user
    }
    ```


### What's too long?
1. Whitespace & Comments
2. Scrolling required
3. Naming Issues
4. Multiple Conditonals
5. Hard to digest

> Clean code

>- Rarely be over 20 lines
>- Hardly ever over 100 lines
>- No more than 3 parameters


### Exceptions
1. Unrecoverable
    - Null Reference
    - File not found
    - Access denied
2. Recoverable
    - Retry connection
    - Try different file
    - Wait and try again
3. Ignorable
    - Logging Click

#### Dirty
```c#
try
{
    RegisterSpeaker
}
catch(Exception e)
{
    LogError(e);
}
EmailSpeaker()

try
{
    // many
    // lines
    // of
    // complicated
    // logic
}
catch (ArgumentOutOfRangeException)
{
    // do somehthing here
}
```
#### Clean
```c#
RegisterSpeaker();
EmailSpeaker();

try
{
    SaveThePlanet();
}
catch (ArgumentOutOfRangeException)
{
    // do something here
}

private void SaveThePlanet()
{
    // many
    // lines
    // of
    // complicated
    // logic
}
```

## Classes
### When to create a class?
- New Concept, Abstract or real-world
- Low Cohesion, Methods should relate
- Promote Reuse, Small - targeted => reuse
- Reduce Complexity, Solve once, hide away
- Clarify parameters, Identify a group of data
## Comments
1. Prefer expressive code over comments.
2. Use comments when code alone can't be sufficient.

### Redundant
1. Assume your reader can read code
2. Don't repeat yourself
- Dirty
```c#
int i = 1; // Set i = 1

var cory = new User(); // Instantiate a new user

/// <summary>
/// Default Constructor
/// </summary>
public User() {}

/// <summary>
/// Calculates Total Charges
/// </summary>
public void CalculateTotalCharges() {}

```


### Intent
> Instead, clarify intent in code
1. Improved function naming
2. Intermediate variable
3. Constant or enum
4. Extract conditonal to function
```c#
// Assure user's account is deactivated
if (user.Status == 2)

```

- Clean
```c#
if (user.Status == Status.Inactive)
```
### Apologies and Warnings
1. Apologies
- Dirty
```c#
// Sorry, this crashes a lot so I'm jst swallowing the exception

// I was too tired to refactor this pile
// of spghetti code when I was done

```

- Clean
```c#
// Don't apologize.
// 1. Fix it before commit/merge
// 2. Add TODO marker comment if you must

```

2. Warnings
- Dirty
```c#
// Here be dragons - See bob

// Great sins against code
// begin here...

```

- Clean
```c#
// TO avoid warning, refactor.

```
### Zombie Code
#### Common Causes
1. Risk Aversion
2. Hoarding Mentality
#### Optimize Signal to Noise Ratio
1. Remove unnecessary codes that are comment out.
#### Problems
1. Reduces readability
2. Creates ambiguity
3. Hinders refactoring
4. Add moise to searches
5. Code isn't loss anyway

### Dividers and Brace Trackers
- Dirty
```c#
private void MyLongFunction()
{
    lots
    of
    code

    // Start search for available concert tickets

    lots
    of
    concert
    search
    code

    // End of concert ticket search

    lots
    more
    code

    // Needs comments to divide function sections? Refactor
}

private void AuthenticateUsers()
{
    bool validLogin = false;
    // deeply
        // nested
            // code

            if (validLogin)
            {
                // lots
                // of
                // code
                // to 
                // log
                // user
                // in
            } // end user login
        //even
    // more code
}

```

- Clean
```c#
private void MyShortFunction()
{
    function1();
    functionsSearch();
    function2();
}

private void AuthenticateUsers()
{
    bool validLogin = false;
    // deeply
        // nested
            // code

            if (validLogin)
            {
                LoginUser();
            }
        //even
    // more code
}


```
### Bloated Header
1. Avoid line endings
2. Don't repeat yourself
3. Follow Conventions
- Dirty
```c#
// ******************************************
// Filename: Monolith.cs                    *
//                                          *
// Author: Reemar                           *
// Created: 05/13/2018                      *
// Weather that day: Sunny                  *
//                                          *
// Summary                                  *
// Blah blah blahhhhhhhhhhhhhhhhhhhhhhhh    *
// Blah blah blahhhhhhhhhhhhhhhhhhhhhhhh    *
// Blah blah blahhhhhhhhhhhhhhhhhhhhhhhh    *
// Blah blah blahhhhhhhhhhhhhhhhhhhhhhhh    *
// ******************************************

```

- Clean
```c#

```
### Defect Log
1. Change metadata belongs in source control
- Dirty
```c#
// Defect #5374 DA 12/10/2010
// We weren't checking for null here
if (FirstName != null)
{

}

```

### Clean Comments
1. To do
    - Standardize
    - Watch out
        - May be an apology or warning comment in disguise
        - Often ignored
2. Summary
    - Describe intent at general lvel higher than the code
    - Often useful to provide high level overview of class
    - Risk: Don't use to simply augment poor naming/code level intent

3. Documentation
    - Only when it can't be expressed in code

- Clean
```c#
// see www.facebook.com/api for documentation
```

### About to write a comment?
- Ask yourself
    - Could I express what I'm about to type in *code*?
        - Intermediate variable, elminate magic number, utilize enum?
        - Refactor to a well-name method
            - Separate scope
            - More likely to stay updated
            - Better readability

    - Am I explaining bad code I've just written instead of refactoring?
    - Should this simply be a message in a source control commit?

## Demo
## Stay Clean

