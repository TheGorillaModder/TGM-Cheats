switchPage(0);
let paymentMethod = "";
let username = "";
let items = [];
let price = 0;
function addItem(itemId) {
    switch (itemId) {
        case 2001: {
            const itemName = 'TGM Advanced ($5)';
            let alreadyAdded = false;
            for (i = 0; i < items.length; i++) {
                if (items[i] == itemName) {
                    alreadyAdded = true;
                    break;
                }
            }
            if (!alreadyAdded) {
                items.push(itemName);
                price += 5;
            }
            break;
        }
        default: {
            break;
        }
    }
    refreshTopBar();
}
function changePaymentMethod(methodId) {
    switch (methodId) {
        case 0: {
            paymentMethod = 'Cashapp';
            break;
        }
        default: {
            break;
        }
    }
    refreshPaymentMethod();
}
function refreshPaymentMethod() {
    let paymentMethodDisplay = document.getElementById('paymentMethod');
    paymentMethodDisplay.innerHTML = paymentMethod;
}
function refreshTopBar() {
    let cartButton = document.getElementById('cartButton');
    cartButton.innerHTML = `Cart (${items.length})`;
}
function goToDescription(itemId) {
    const websiteSource = document.getElementById("webPage");
    let wantedPage = ``;
    switch (itemId) {
        case 1001: {
            wantedPage = `
                <button><a href="blob:https://github.com/232c9e4e-085f-4af6-98b1-8e5eb2fb83c1" target="_blank">=======================================Download=======================================</a></button> <br> <br>

                <h1>Features:<h1>
                
                <h2>Settings</h2>
                <ul>
                    <li>First Person</li>
                </ul> <br> <br>
                
                <h2>Safety</h2>
                <ul>
                    <li>Anti Report Disconnect</li>
                    <li>Anti Report Reconnect</li>
                    <li>Flush RPCs</li>
                </ul> <br> <br>
                
                <h2>Movement</h2>
                <ul>
                    <li>Platforms</li>
                    <li>Slow Fly</li>
                    <li>Normal Fly</li>
                    <li>Fast Fly</li>
                    <li>Mega Fly</li>
                    <li></li>
                </ul> <br> <br>
            `;
            break;
        }
        case 2001: {
            wantedPage = `
                Features: 
            `;
            break;
        }
        default: {
            break;
        }
    }
    websiteSource.innerHTML = `<div class="descriptionPageContainer" id="descPgContainer">` + wantedPage + `</div>`;
}
function switchPage(number) {
    const websiteSource = document.getElementById("webPage");
    let wantedPage = ``;
    switch (number) {
        case 0: {
            wantedPage = `
                <div class="homePage">
                    <header>
                        <h1>Welcome to TGM Cheats</h1>
                        <p>Best Cheats for Gorilla Tag and More</p>
                    </header>
                    <div class="content">
                        <p>I create, and post the best cheats, focusing primarily on Gorilla Tag cheats. However, I also develop cheats for other games. If you're looking for cheats, you've come to the right place!</p>
                        <p>I'm not the only one working on cheats here. This website is also a place for people to share their mods. If you'd like to have your mod featured here, simply join our Discord server and submit your request!</p>
                        <div class="links">
                            <p>Ready to get your mod added?</p>
                            <a href="https://discord.gg/3Udb8WsbYu" target="_blank">Join the Discord Server</a>
                        </div>
                    </div>
                </div>
            `;
            break;
        }
        case 1: {
            wantedPage = `
		        <div class="itemContainer" onclick="switchPage(6)">Gorilla Tag Free Cheats</div>
		        <div class="itemContainer" onclick="switchPage(7)">Gorilla Tag Paid Cheats</div>
            `;
            break;
        }
        case 2: {
            wantedPage = `
                Youtube: https://www.youtube.com/@TheGorillaModder <br>
                Discord: https://discord.gg/3Udb8WsbYu <br>
                Email: thegorillamodder@gmail.com <br> <br>
                
                (NOTE: EMAIL WILL TAKE LONGER TO RESPOND IF I DO AT ALL, PLEASE CONTACT DISCORD INSTEAD)
            `;
            break;
        }
        case 3: {
            wantedPage = `
		        1. We do not take refunds for any reasons! <br>
                2. Every cheat on this page has been thoroughly checked by the owner (me, TGM) for any sort of malware/rats... SO DON'T ASK! <br>
                3. If any problems occur please contact the dicord immediately and they will be resolved as soon as possible! <br>
                4. If you want your cheat added to this page contact TGM and it has a possibilty to be added to our cheats page! <br> <br>

                (NOTE: NOT EVERYTHING ON THIS PAGE WAS MADE BY TGM)
            `;
            break;
        }
        case 4: {
            wantedPage = `
		        Join my discord and open a ticket for help downloading free cheats, buying paid cheats, questions, or anything else!
            `;
            break;
        }
        case 5: {
            let itemList = ``;
            for (i = 0; i < items.length; i++) {
                itemList = itemList + `${items[i]} <br>`;
            }
            wantedPage = `
                <div class="cartPageContainer" style="margin: 5px;">
                    <h3 style="margin: 5px;">${itemList} <br> <br> $${Math.round(price * 102.5) / 100} Total</h3>
                    <div class="dropdown" style="margin: 5px;">
                        <button class="dropbtn" id="paymentMethod">Payment Method</button>
                        <div class="dropdown-content">
                            <a onclick="changePaymentMethod(0)">Cashapp</a>
                        </div>
                    </div>
			        <input type="text" id="typedUsername" style="height: 50px; margin: 5px;" placeholder="Type Discord Username (REQUIRED)">
                    <button onclick="requestPurchase()" style="height: 50px; margin: 5px;">Send Purchase Request</button>
                </div>
            `;
            break;
        }
        case 6: {
            wantedPage = `
		        <div class="itemContainer" onclick="goToDescription(1001)">TGM Cheats</div>
            `;
            break;
        }
        case 7: {
            wantedPage = `
		        <div class="itemContainer" onclick="goToDescription(2001)">TGM Advanced ($5) <button onclick="addItem(2001)" style="width: 90%;">Add To Cart</button></div>
            `;
            break;
        }
        default: {
            break;
        }
    }
    websiteSource.innerHTML = wantedPage;
}
const webhookUrl = 'https://discordapp.com/api/webhooks/1330372692561629184/UWPFGxuXw9xV_biNXIsQnsGOXzJbG2eGjleBY4m-IWWDfNROwbp_zQb2wJscz9DrE4Sm';
function requestPurchase()
{
    let itemList = ``;
    for (i = 0; i < items.length; i++) {
        itemList = itemList + `${items[i]}\n`;
    }
    username = document.getElementById('typedUsername').value;
    if (itemList.length >= 1 && username != "" && paymentMethod != "") {
        const data = {
            content: `**Purchase Request From:** @${username}\n\n${itemList}\n$${Math.round(price * 102.5) / 100} Total\n\nPayment Method: ${paymentMethod}`,
            username: 'Purchase Bot'
        };
        fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
    }
}
