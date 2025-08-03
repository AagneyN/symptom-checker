async function checkSymptoms() {
  const input = document.getElementById('symptoms').value;
  const resultDiv = document.getElementById('result');
  resultDiv.textContent = "Processing...";

  try {
    const response = await fetch("https://REGION.functions.appdomain.cloud/api/v1/web/YOUR_NAMESPACE/default/checkSymptoms", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: input })
    });

    const data = await response.json();
    resultDiv.textContent = JSON.stringify(data, null, 2);
  } catch (err) {
    resultDiv.textContent = "Something went wrong: " + err;
  }
}
