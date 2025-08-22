const myCookie =
  `       CDS-prod-eu-Shared=cM4iTI9tPdyhmqWgmwO55YgYnv0PzUXrPN8J0SqN8SU2wij8H2ROlQP8Bm2Zfr9WsA9e5UeydrNwIxzfQ2qi+kyRmfmWOhxnqSCv5GaQYMe4AnmUCBp+QEFWmGgiLOouGN4srkynOV9Y/VmjIf2SEOzb3TE2zCRFDIgURVSCzyQJo9UZXHva/n0cGIwKloNkQwXrkwkBeDPuc3JeSf4++bqv8myPI/3Iw3lcTT8oWaQkFdjpAOGBupn7myH33rD8GpwblLQHikzs290xNswkRdV2tU6X59E2XfBeetOteU75Jr5dbR1SymOQfZXCuQVoIc80Hzc0FBpMWcHPdMwomGussR+yq5g+Ex4E7BH11gvAVX8aID3psdbnYo8nj+dT7NvdMTbMJEUlnJhGbwjW/dhklSbHOzsCinIwGghO4ZFNw0Y5v44rxQcGDYZtsS0UgQpzTjRLJhb6Ejmz5p9I0lvEZsid9R2lwM67KkWxrTHYDf4KcXzsaezb3TE2zCRFbQe5kQlLMJ90QfcdurKkMY8j0WlsY0ywKpv9EmDsfHCpRIWaBHxSO4EKc040SyYWnsIS3ZCcTC6aH5VFvWs7MDUfZQwGlsB8Ju3rpqjxPq/s290xNswkRWjlyq50bHgp3aeMYV3ypZKVLGe/96EJo9VXPf3Et5r1ziAh2iL411KBCnNONEsmFiSS7lfrjzZSPX0LiVTLjsZ+C6JMxApda5qRCcpZMGKa7NvdMTbMJEXzIHEl4Q1ofWITExgdGMPPMrpwdsxrTGBEG7mN9XIacBqRD+9+nkXTLUGcd+B9sujzLy/pAYZ8Ay6hjHw5BxtBz37oUS6fvw21J61D8bNvhuzb3TE2zCRFgp7xYpZE64d9XUPJMK/q1HqxUozV9ewd5C5XwUWMAXZvGVs5ONgqJ0xZwc90zCiY1nMr5rHY01OSF52tHBuKzLa5/VPyPJeu64xzmjJVvjrs290xNswkRSc0eSr7LSm6uEVcAkh+j8skhf9nmuZ8YiOXfA3yr6Y3D1nu/uCRavBMWcHPdMwomASAqJIaA5wfFeMJDicfEgwBRN3X6GloXGRDIQ+J93Ix7NvdMTbMJEXoZ/LBSS7caZInHG94tMdYl4P9dhwMC6z2DkmMCuU5c+tBSchZKtRwLUGcd+B9suixuuku47ybOYFpx4N9spDuBvfcJbHcGfQReVIIEiIaeezb3TE2zCRFmJAFabLrIoduOpXJe+b9ljfN5eZWqAvyrDNjWUFXRorGV0wt5sCMLP39WiItT9ZS; Bravais-prod-eu-Context="cM4iTI9tPdyhmqWgmwO55YgYnv0PzUXrKE7ilBIp8+ST1ZbFNyjmeq1kbcNfJnucX + fvbi5XbbWu7SmnCCahCS59hBp + Eb8bIswdbve4i2F4CahcpmU / 6j / Byj / 5Jw / ABB4Fsdg + fHjYYtLTfFU9 / pl0rJbIStXf8K1JKDiLtCeRcgHNwuhHLwI02Tqr8PLUNKxQS6i2fzWJqYlhbxTOhg == "; AWSALBTG=gQNpMjTwSL/GhWmlO908W9VCaxoXIn/F2ql/jDySC6ZVrQMB+itI1Th3aIxiul8oo+xhqNtMZbcCqFZc78bKeTzvhw92oy1xSJmEljjxsya2e5oYzyjJpxkLnM4l93j1sOTHRW37LsUcJRySvBsmko7KPbNaWs/up7ykrS9Ibjytjt4aAXw=; AWSALBTGCORS=gQNpMjTwSL/GhWmlO908W9VCaxoXIn/F2ql/jDySC6ZVrQMB+itI1Th3aIxiul8oo+xhqNtMZbcCqFZc78bKeTzvhw92oy1xSJmEljjxsya2e5oYzyjJpxkLnM4l93j1sOTHRW37LsUcJRySvBsmko7KPbNaWs/up7ykrS9Ibjytjt4aAXw=; AWSALB=m+T3UunwoR2B7xms4S5mUb0kKQujHreNJ8gIIeFNcCDBUAbQURb6SmSAl3GWI3pYQ5amqNnPmqQdeGFi8ktYgVmXX1dk4m9M+AyAFsAAtwXk3zIhK65GNvleSVCN; AWSALBCORS=m+T3UunwoR2B7xms4S5mUb0kKQujHreNJ8gIIeFNcCDBUAbQURb6SmSAl3GWI3pYQ5amqNnPmqQdeGFi8ktYgVmXX1dk4m9M+AyAFsAAtwXk3zIhK65GNvleSVCN`;

console.log(getCookie("Bravais-prod-eu-Context"));

// reference moodle
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
