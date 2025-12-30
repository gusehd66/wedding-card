export function initNaverMap() {
  const mapContainer = document.getElementById('map-container');
  if (!mapContainer || typeof window === 'undefined' || !window.naver?.maps) return;

  const address = '서울 광진구 능동로 87';
  const placeName = '까사그랑데';
  const latitude = 37.539146;
  const longitude = 127.069655;

  const mapOptions = {
    center: new window.naver.maps.LatLng(latitude, longitude),
    zoom: 17,
    zoomControl: true,
    zoomControlOptions: {
      position: window.naver.maps.Position.TOP_RIGHT
    }
  };

  const map = new window.naver.maps.Map('map-container', mapOptions);

  const marker = new window.naver.maps.Marker({
    position: new window.naver.maps.LatLng(latitude, longitude),
    map: map,
    title: placeName
  });

  const infoWindow = new window.naver.maps.InfoWindow({
    content: `<div style="padding: 10px; text-align: center; min-width: 150px;"><strong>${placeName}</strong><br>${address}<br>건대입구역 자이엘라 6F</div>`
  });

  window.naver.maps.Event.addListener(marker, 'click', function() {
    if (infoWindow.getMap()) {
      infoWindow.close();
    } else {
      infoWindow.open(map, marker);
    }
  });
}

