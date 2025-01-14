<?php

namespace InnStudio\Prober\Components\Timezone;

use InnStudio\Prober\Components\Events\EventsApi;

class Timezone
{
    public function __construct()
    {
        EventsApi::on('init', array($this, 'filter'), 1);
    }

    public function filter($action)
    {
        if ( ! ini_get('date.timezone')) {
            date_default_timezone_set('GMT');
        }

        return $action;
    }
}
