const features_enabled = document.querySelectorAll('.enabled');
const features_disabled = document.querySelectorAll('.disabled');

for (feature of features_enabled) {
    const check = document.createElement('div');
    check.classList.add('enabled-figure');
    feature.append(check);
}

for (feature of features_disabled) {
    const cross = document.createElement('div');
    cross.classList.add('disabled-figure');
    feature.append(cross);
}