/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var btn = document.getElementById("send");
var latitude = document.getElementById("latitude");
var longitude = document.getElementById("longitude");
var altitude = document.getElementById("altitude");

var maposition; 

var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        getPosition();
        console.log('Received Event: ' + id);
    }

};

app.initialize();

btn.onclick = function() {
    getPosition();
}

function getPosition() { 
    var options = { enableHighAccuracy: true, maximumAge: 3600000 } 

    var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError, options); 

    function onSuccess(position) { 
        $("#latitude").val(position.coords.latitude);
        $("#longitude").val(position.coords.longitude);
        $("#altitude").val(position.coords.altitude);
        
        alert('Latitude: ' + position.coords.latitude + '\n' + 
        'Longitude: ' + position.coords.longitude + '\n' + 
        'Altitude: ' + position.coords.altitude ); 
    }; 

    function onError(error) { 
        alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n'); 
    } 
}