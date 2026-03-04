function GetRandomInt(min, max)
{
    const minNumberCeiled = Math.ceil(min);
    const maxNumberFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxNumberFloored - minNumberCeiled + 1) + minNumberCeiled);
}

function GetTitle()
{
    const titleInput = document.querySelector('input[name="name"]');
    return titleInput;
}

function GetItemCondition()
{
    const itemCondition = document.querySelector('input[placeholder="Stan"]');
    itemCondition.click();

    setTimeout(() => {
        const option = [document.querySelectorAll('[role="listbox"]')].find(el => el.textContent.includes("Powystawowy"));

        if (option) option.click();
    }, 200);

    itemCondition.dispatchEvent(new InputEvent('input', { bubbles: true }));
    
    return itemCondition;
}

function InputPrice()
{
    const auctionCheckbox = document.querySelector('#auction-checkbox');
    auctionCheckbox.ariaChecked = true;
    auctionCheckbox.dispatchEvent(new InputEvent('input', { bubbles: true }));

    const priceInput = document.querySelector('input[aria-label="Cena wywoławcza zł"');
    priceInput.value = 1;
    priceInput.dispatchEvent(new InputEvent('input', { bubbles: true }));
}

function VAT()
{
    const invoice = document.querySelector('#invoice');
    invoice.value = "VAT";
    invoice.dispatchEvent(new Event('change', { bubbles: true }));
}

function PickVATRate()
{
    const invoiceRate = document.querySelector('#PL-tax-rate');
    invoiceRate.value = "23.00";
    invoiceRate.dispatchEvent(new Event('change', { bubbles: true }));
}

function ChooseAuctionDuration()
{
    const republishChecbox = document.querySelector('#checkbox-republish');
    republishCheckbox.ariaChecked = true;
    republishChecbox.dispatchEvent(new InputEvent('input', { bubbles: true }))

    const auctionDuration = document.querySelector('#auctionDurationSelect');
    auctionDuration.value = "PT120H";
    auctionDuration.dispatchEvent(new Event('change', { bubbles: true }));
}

function SelectShippingRate()
{
    const shippingRate = document.querySelector('#shippingRatedId');
    shippingRate.value = "b20f679b-748b-4e9e-a153-825b6a984b44";
    auctionDuration.dispatchEvent(new Event('change', { bubbles: true }));
}

function SelectPublicationTime()
{
    const publicationInTheFuture = document.querySelector('#publicationTimeInTheFuture');
    publicationInTheFuture.ariaChecked = true;

    const publicationHour = document.querySelector('#timepicker-hours');
    publicationHour.value = GetRandomInt(18, 21);
    publicationHour.dispatchEvent(new InputEvent('input', { bubbles: true }));

    const publicationMinute = document.querySelector('#timepicker-hours');
    publicationMinute.value = GetRandomInt(0, 59);
    publicationMinute.dispatchEvent(new InputEvent('input', { bubbles: true }));
}

function SelectComplaintAndWarranty()
{
    const complaint = document.querySelector('#implied-warranties');
    complaint.value = "0947318c-91a6-4006-b0ff-e3ea4de8aacc";
    complaint.dispatchEvent(new Event('change', { bubbles: true }));

    const warranty = document.querySelector('#warranties');
    warranty.value = "7c986f71-9e19-49a6-bc7a-8372862b3066";
    warranty.dispatchEvent(new Event('change', { bubbles: true }));
}

function WriteSafetyInformation()
{
    const safetyInformationOption = document.querySelector('#safety-information--5a8a389c-c25f-4578-8d2a-f4ba1c28d2ee');
    safetyInformationOption.value = "TEXT";
    safetyInformationOption.dispatchEvent(new Event('change', { bubbles: true }));

    // const safetyInformationText = document.querySelector('#safetyDescription-5a8a389c-c25f-4578-8d2a-f4ba1c28d2ee');
    // safetyInformationText.v
}

function GenerateDescription()
{   
    const title = GetTitle();
    const condition = GetItemCondition();
    const template = `${title}
    Stan ${condition}
    Opakowanie foliowe
    A.R.`;

    const iframe = document.querySelector('#id_ifr');
    const doc = iframe.contentDocument;
    doc.body.innerHTML = template;
}

    InputPrice();
    VAT();
    PickVATRate();
    ChooseAuctionDuration();
    SelectShippingRate();
    SelectPublicationTime();
    SelectComplaintAndWarranty();
    WriteSafetyInformation();
    GenerateDescription();

